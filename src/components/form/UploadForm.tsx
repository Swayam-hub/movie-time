"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Textarea } from "../ui/textarea";
import { getPreSignedUrl } from "@/lib/getPresignedUrl";
import axios from "axios";
import { useState } from "react";

const formSchema = z.object({
  // email: z.string().min(2, {
  //   message: "Email must be at least 2 characters.",
  // }),
  // movieTitle: z.string().min(2, {
  //   message: "Title must be at least 2 characters.",
  // }),
  // movieDirector: z.string().min(2, {
  //   message: "Director must be at least 2 characters.",
  // }),
  // movieProducer: z.string().min(2, {
  //   message: "Producer must be at least 2 characters.",
  // }),
  // releseDate: z.string().min(2, {
  //   message: "Date cannot be empty.",
  // }),
  // movieLength: z.optional(z.string()),
  // movieActors: z.optional(z.string()),
  // moviePlot: z.optional(z.string()),
  movie: z.object({ file: z.string() }),
});

export function UploadForm() {
  const [file, setFile] = useState<any>();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // email: "",
      // movieTitle: "",
      // movieDirector: "",
      // movieProducer: "",
      // releseDate: "",
      // movieLength: "",
      // movieActors: "",
      // moviePlot: "",
      movie: { file: "" },
    },
  });
  console.log(file);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const chunkSize = 100 * 1024 * 1024;
    const totalChunk = Math.ceil(file.size / chunkSize);
    let start = 0;
    for (let index = 0; index < totalChunk; index++) {
      const chunk = file.slice(start, start + chunkSize);
      start += chunkSize;
      const formData = new FormData();
      formData.append("filename", file.name);
      formData.append("chunk", chunk);
      // formData.append("totalChunk", totalChunk);
      // formData.append("chunkIndex", index);
    }
    const url = await axios.post("http://localhost:8080/upload", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(url);

    // await axios.put(url, movie);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="my-4">
          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black my-4"
                    placeholder="Enter Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <FormField
            control={form.control}
            name="movie"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-1/4 my-4"
                    id="picture"
                    type="file"
                    // value={file}
                    // onChange={(e: any) => field.onChange(e.target.files[0])}
                    onChange={(e: any) => setFile(e.target.files[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="movieTitle"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black my-4"
                    placeholder="Enter Movie Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="movieDirector"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black my-4"
                    placeholder="Enter Director"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="movieProducer"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black my-4"
                    placeholder="Enter Producer"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="releseDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="text-black my-4"
                    placeholder="Enter Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="movieActors"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="text-black my-4"
                    placeholder="Enter Movie Actors"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="moviePlot"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="text-black my-4"
                    placeholder="Enter Movie Plot"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <div className="text-right">
            <Button variant={"ghost"} type="submit" className="ml-3">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
