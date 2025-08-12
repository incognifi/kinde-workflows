"use server";

import React from "react";
import { renderToString } from "react-dom/server.browser";
import { type KindePageEvent } from "@kinde/infrastructure";
import { DefaultLayout } from "../../../../layouts/default";
import { Widget } from "../../../../components/widget";
import { Root } from "../../../../root";

const DefaultPage: React.FC<KindePageEvent> = async ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout>
        <Widget heading="Sign in to Incognifi" />
      </DefaultLayout>
    </Root>
  );
};

export default async function Page(event: KindePageEvent): Promise<string> {
  const page = await DefaultPage(event);
  return renderToString(page);
}
