"use client";

import { Note } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IoClose } from "react-icons/io5";

export default function RenderNote(note: Note) {
  const queryClient = useQueryClient();

  const deleteNote = useMutation({
    mutationFn: async (id: string) => {
      const cachedData = queryClient.getQueryData<any | undefined>(["notes"]);
      queryClient.setQueryData(
        ["notes"],
        cachedData.filter((note: any) => note.id != id),
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  return (
    <div
      key={note.id}
      className="p-1 min-h-[140px] text-gray-700 hover:scale-[1.01] transition"
      style={{ backgroundColor: note.color }}
    >
      <div className="flex justify-between w-full items-center relative">
        <h3 className="font-black capitalize mr-3">{note.title}</h3>
        <button
          className="absolute right-0 top-0"
          onClick={() => deleteNote.mutate(note.id)}
        >
          <IoClose />
        </button>
      </div>
      <p className={`${note.title ? "mr-0" : "mr-3"}`}>{note.description}</p>
    </div>
  );
}
