import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/(main)/components/ui/select";
import { Select } from "@radix-ui/react-select";

export const Angilal = () => {
  return (
    <div className="flex flex-col w-full h-fit bg-white gap-5 text-black rounded-3xl border px-6 py-6">
      <div className="w-full h-fit">
        <p>Ерөнхий ангилал</p>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full h-fit">
        <p>Дэд ангилал</p>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
