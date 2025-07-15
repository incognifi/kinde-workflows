import {
  onPostAuthenticationEvent,
  WorkflowSettings,
  WorkflowTrigger,
  fetch,
  getEnvironmentVariable,
  createKindeAPI,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "onPostUserAuthentication",
  trigger: WorkflowTrigger.PostAuthentication,
  failurePolicy: {
    action: "stop",
  },
  bindings: {
    "kinde.mfa": {},
    "kinde.fetch": {},
    "kinde.env": {},
    url: {},
  },
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onPostAuthenticationEvent) {
  const kindeAPI = await createKindeAPI(event);

  const { data: user } = await kindeAPI.get({
    endpoint: `users/${event.context.user.id}/properties`,
  });
  console.log("USER", user);
  try {
    const ORCHESTRATOR_URL = getEnvironmentVariable("ORCHESTRATOR_URL")?.value;
    if (!ORCHESTRATOR_URL) {
      throw Error("Orchestrator Endpoint not set");
    }

    const { data } = await fetch<{ data: { userId: string } }>(
      `${ORCHESTRATOR_URL}/api/users?authId=${event.context.user.id}`,
      {
        method: "GET",
        responseFormat: "json",
        headers: {
          "X-Client-App": `kinde-auth-${event.context.application.clientId}`,
        },
      }
    );

    const { userId } = data;

    const putResult = await kindeAPI.put({
      endpoint: `users/${event.context.user.id}/properties/incognifi-user-id?value=${userId}`,
    });
    console.log("Put Result", putResult);
  } catch (error) {
    console.error(
      "Error",
      JSON.stringify(error, Object.getOwnPropertyNames(error))
    );
  }
}
