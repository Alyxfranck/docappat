"use client";

import { signIn } from "next-auth/react";
import { Select } from "@/primitives/Select";
import styles from "./signin.module.css";

// Used only for demo authentication, displays a dropdown of users
export function DemoLogin() {
  return (
    <p>Demo login isch net mehr</p>
  );
}
