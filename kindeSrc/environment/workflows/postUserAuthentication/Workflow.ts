import {
  onPostAuthenticationEvent,
  WorkflowSettings,
  WorkflowTrigger,
  getEnvironmentVariable,
  createKindeAPI,
} from "@kinde/infrastructure";

declare const kinde: {
  fetch: (
    url: string,
    options: {
      method: string;
      headers?: Record<string, string>;
      body?: string;
    },
  ) => Promise<Response>;
};

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "incognifi-user-sync",
  name: "Sync User To Incognifi",
  trigger: WorkflowTrigger.PostAuthentication,
  failurePolicy: {
    action: "stop",
  },
  bindings: {
    "kinde.mfa": {},
    "kinde.fetch": {},
    "kinde.env": {},
  },
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onPostAuthenticationEvent) {
  if (!event.context.auth.isNewUserRecordCreated) {
    return;
  }

  const kindeId = event.context.user.id;

  const kindeAPI = await createKindeAPI(event);
  const { data: user } = await kindeAPI.get({
    endpoint: `users/${kindeId}`,
  });

  const webhookSecret = getEnvironmentVariable(
    "INCOGNIFI_WEBHOOK_SECRET",
  )?.value;

  const response = await kinde.fetch(
    `https://incognifi-api.max-514.workers.dev/webhooks/kinde/user-authenticated`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${webhookSecret}`,
      },
      body: JSON.stringify({
        event: {
          context: {
            user: {
              id: user.id,
              email: user.preferred_email,
              given_name: user.first_name,
              family_name: user.family_name,
            },
          },
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Incognifi webhook failed: ${response.status}`);
  }
}
