import { Document, User } from "@/types";
import { getUser } from "./getUser";

type Props = {
  userIds?: Document["id"][];
  search?: string;
};

/**
 * Get Users
 *
 * Simulates calling your database and returning a list of user with seeded random colours
 *
 * @param userIds - The user's ids to get
 * @param searchTerm - The term to filter your users by, checks users' ids and names
 */
export async function getUsers({ userIds, search }: Props) {
  return null;
  // TODO:
}
