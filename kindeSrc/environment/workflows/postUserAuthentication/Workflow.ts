import {
  onPostAuthenticationEvent,
  WorkflowSettings,
  WorkflowTrigger,
  secureFetch,
  getEnvironmentVariable,
  accessTokenCustomClaims,
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
    "kinde.secureFetch": {},
    "kinde.accessToken": {},
  },
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onPostAuthenticationEvent) {
  try {
    const ORCHESTRATOR_URL = getEnvironmentVariable("ORCHESTRATOR_URL")?.value;
    console.log("Orchestrator Url", ORCHESTRATOR_URL);
    if (!ORCHESTRATOR_URL) {
      throw Error("Orchestrator Endpoint not set");
    }

    console.log("Client Id", event.context.application.clientId);

    const { userId } = await secureFetch<{ userId: string }>(
      `${ORCHESTRATOR_URL}/api/users?authId=${event.context.user.id}`,
      {
        method: "GET",
        responseFormat: "json",
        headers: {
          "X-Client-App": `kinde-auth-${event.context.application.clientId}`,
        },
      }
    );

    console.log("User Id", userId);

    const accessToken = accessTokenCustomClaims<{ user_id: string }>();
    accessToken.user_id = userId;
  } catch (error) {
    console.log("WHAT THE ACTUAL FUCK?", error);
    console.error("Error", JSON.stringify(error));
  }
}
