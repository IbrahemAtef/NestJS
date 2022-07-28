import { Controller, Get } from "@nestjs/common";


@Controller("users")
export class UsersController {
    // control user profile
    
    @Get("profile")
    async profile() {
    }
}