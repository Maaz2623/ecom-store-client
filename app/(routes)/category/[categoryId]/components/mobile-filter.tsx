"use client";
import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { PlusIcon, X, XIcon } from "lucide-react";
import React, { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters
        <PlusIcon size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className={`relative z-40 lg:hidden`}
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25 " />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            className={`relative ml-auto h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl`}
          >
            <div className="flex items-center justify-end p-4">
              <IconButton icon={<XIcon size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
