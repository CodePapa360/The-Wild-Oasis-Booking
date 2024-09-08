import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

// The name of the function like this one GET is important. It must match the HTTP method you want to handle. Using this method you can create your own custom API endpoints. It's not that common and useful anymore, but it's still possible to use it. Nowadays we have something called server actions that are more powerful and easier to use. But in case you need it you can use this method to create your own custom API endpoints.

export async function GET(request, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json([cabin, bookedDates]);
  } catch (error) {
    return Response.json({ message: "Cabin not found" });
  }
  return Response.json({ test: "test" });
}

// export async function POST() {}
