"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { deleteBooking, getBookings, updateGuest } from "./data-service";

export async function UpdateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const regex = /^[a-zA-Z0-9]{6,12}$/;

  if (!regex.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = {
    nationality,
    countryFlag,
    nationalID,
  };

  await updateGuest(session.user.guestId, updateData);

  // Revalidate the profile page to show the updated data
  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be signed in");

  /// This checking is to ensure that the user can only delete their own reservations. This is a security measure to prevent unauthorized deletion of reservations by malicious users.
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You don't have permission to delete this reservation");
  ///

  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
