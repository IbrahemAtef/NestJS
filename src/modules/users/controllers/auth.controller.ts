import { DoesUserExist } from './../../../common/guards/doesUserExist.guard';
import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { LoginDto } from "../dto/login.dto";
import { SignUpDto } from "../dto/sign-up.dto";
import { UsersService } from "../users.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly userService: UsersService) {
    }
    @Post("login")
    //@Public()
    async login(@Body() body: LoginDto) {
        return this.userService.login(body);
    }
    @UseGuards(DoesUserExist)
    @Post("signup")
    async signup(@Body() body: SignUpDto) {
        return this.userService.signUp(body);
    }
}
