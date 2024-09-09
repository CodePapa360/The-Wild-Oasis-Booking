"use server";

import { signIn } from "./auth";

export async function siggnInAction() {
  await signIn("google", { redirectTo: "/account" });
}
