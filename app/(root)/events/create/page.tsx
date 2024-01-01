import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

function CreateEvents() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  // console.log("userId", userId);
  return (
    <>
      <section className="bg-slate-50	 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 md:px-10">
        <h3 className="warapper h3-bold text-center sm:text-left">
          Create Events
        </h3>
      </section>
      <div className="wrapper my-8 ">
        {" "}
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
}

export default CreateEvents;