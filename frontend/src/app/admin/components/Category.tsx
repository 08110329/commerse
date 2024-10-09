import { Button } from "@/app/(main)/components/ui/button";
import { DialogFooter, DialogHeader } from "@/app/(main)/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "postcss";

export const Category = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <input />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button variant="outline">Add category</Button>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[425px]">
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label className="text-right">Category</Label>
    //         <input className="col-span-3" />
    //       </div>
    //     </div>
    //     <DialogFooter>
    //       <Button type="submit">Сонгох</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
  );
};
