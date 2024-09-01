import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "../ui/textarea";

export function CardWithForm() {
  return (
    <Card className="flex-1 border-2 border-foreground/10">
      <CardDescription className="mb-5"></CardDescription>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="성함을 입력해 주세요."
                className=""
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="name" placeholder="메일 주소를 입력해주세요." />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Message">Message</Label>
              <Textarea placeholder="내용을 입력해 주세요." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end mt-10">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
