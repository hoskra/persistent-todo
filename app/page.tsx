"use client";

import CreateNotes from "@/components/CreateNotes";
import ListNotes from "@/components/ListNotes";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const deleteAll = useMutation({
    mutationFn: async () => {
      queryClient.setQueryData(["notes"], []);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  return (
    <main className="w-full p-5">
      <div className="flex justify-between">
        <h1 className="text-[24px] capitalize font-bold">Todo app</h1>

        <button
          onClick={() => {
            deleteAll.mutate();
          }}
          className="border px-2 py-1"
        >
          Delete All Notes
        </button>
      </div>

      <div className="grid grid-cols-[300px_1fr] gap-4 mt-4">
        <div>
          <CreateNotes />
        </div>
        <div className="h-full">
          <ListNotes />
        </div>
      </div>
    </main>
  );
}
