import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {/* Navbar */}
      <div
        className="px-2 py-3 border-b z-50 bg-background sticky
      top-0 left-0 right-0 flex justify-between items-center dark:bg-gray-900"
      >
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-11 w-11"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-72 border-r-0 flex flex-col justify-center"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <div className="text-3xl flex justify-center items-center gap-1">
                    <Avatar className="bg-transparent rounded-full">
                      <AvatarImage
                        src="https://i.pinimg.com/736x/fe/70/0d/fe700dcc429709d0f086051669466b43.jpg"
                        alt="Logo Vagio"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <AvatarFallback className="bg-orange-700 text-white rounded-full w-10 h-10 flex justify-center items-center">
                        V
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-bold text-orange-700">Vagio</span>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <Sidebar />
            </SheetContent>
          </Sheet>
          <p className="text-sm lg:text-base cursor-pointer hidden sm:block">
            Vagio Trading
          </p>
          <div className="p-0 ml-9">
            <Button variant="outline" className="flex items-center gap-3">
              <Search />
              <span>Search</span>
            </Button>
          </div>
        </div>
        {/* Avatar và nút Toggle Dark Mode */}
        <div className="flex items-center gap-3">
          <Avatar className="rounded-full">
            <AvatarImage
              src="https://example.com/avatar.jpg"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <AvatarFallback className="bg-gray-300 text-black rounded-full w-10 h-10 flex justify-center items-center font-semibold">
              Z
            </AvatarFallback>
          </Avatar>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
