"use client";

import { Note } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import RenderNote from "./RenderNote";

export default function ListNotes() {
  const queryClient = useQueryClient();

  const notesQuery = useQuery({
    queryKey: ["notes"],
    queryFn: () => {
      const cachedData = queryClient.getQueryData<any | undefined>(["notes"]);
      return cachedData ? cachedData : [];
    },
  });

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {notesQuery.data?.map((note: Note) => (
        <RenderNote key={note.id} {...{ ...note }} />
      ))}
    </div>
  );
}
