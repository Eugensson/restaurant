"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";

export const ReservationForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <Label htmlFor="firstname" className="flex flex-col gap-2">
          first name
          <Input type="text" name="firstname" id="firstname" />
        </Label>
        <Label htmlFor="lastname" className="flex flex-col gap-2">
          last name
          <Input type="text" name="lastname" id="lastname" />
        </Label>
        <Label className="flex flex-col gap-2">
          date
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="input"
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </Label>
        <Label className="flex flex-col gap-2">
          person
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="How many people?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>People</SelectLabel>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Label>
      </div>
      <Button className="uppercase w-full xl:w-auto xl:self-end">
        Book a Table
      </Button>
    </form>
  );
};
