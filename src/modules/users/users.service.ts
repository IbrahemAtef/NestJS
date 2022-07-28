import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { SignUpDto } from './dto/sign-up.dto';
import { USER_REPOSITORY } from '../../common/constants/repository.constants';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  public async login(user) {
    const token = await this.generateToken(user);
    return { token };
  }

  private async generateToken(user) {
    const u = await this.findOneByEmail(user.email);
    const id = u['dataValues']['id'];
    
    const token = await this.jwtService.signAsync({id});
    return token;
  }

  public async signUp(user) {
    
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create the user
    const newUser = await this.create({ ...user, password: pass });

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = newUser['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return { user: result, token };
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.findOneByEmail(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user['dataValues'];
    return result;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }

  async create(user: SignUpDto): Promise<User> {
    // let result = await this.userRepository.create<User>({...user});
    // return result;
    return await this.userRepository.create<User>({...user});
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });

    // let result = await this.userRepository.findOne<User>({ where: { email } });
    // return result;
  }

  // need to change the id type if not working
  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
    // let result = await this.userRepository.findOne<User>({ where: { id } });
    // return result;
  }
}
