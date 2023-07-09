"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const getRandomColor = () => {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
};

export default function CreateNotes() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDesctiption] = useState("");

  const createNote = useMutation({
    mutationFn: async () => {
      const cachedData = queryClient.getQueryData<any | undefined>(["notes"]);
      const newNote = {
        id: crypto.randomUUID(),
        title,
        description,
        color: getRandomColor(),
      };
      setTitle("");
      setDesctiption("");
      queryClient.setQueryData(["notes"], [...cachedData, newNote]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  return (
    <div className="border p-2">
      <h2 className="text-[18px] font-bold mb-0">Create New Note</h2>
      <div className="flex flex-col gap-2 my-2">
        <label>Title</label>
        <input
          className="bg-[#3e3e3e] outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          className="bg-[#3e3e3e] outline-none"
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            createNote.mutate();
          }}
          className="border border-green-600 px-2 py-1"
        >
          Create Note
        </button>
      </div>
    </div>
  );
}
