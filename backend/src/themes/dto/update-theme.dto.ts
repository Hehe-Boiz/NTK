import { PartialType } from '@nestjs/mapped-types';
import { CreateThemeDto } from './create-theme.dto';

export class UpdateThemeDto extends PartialType(CreateThemeDto) {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  logoText: string;
  universityName: string;
  facultyName: string;
  establishedYear: string;
  motto: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  anniversaryYear: string;
  anniversarySlogan: string;
  mission: string;
  vision: string;
  coreValues: string;
  milestones: {
    year: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
}
