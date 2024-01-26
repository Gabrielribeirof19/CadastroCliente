import { IsOptional, IsInt, Min, IsIn } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    skip: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    take: number;

    @IsOptional()
    @IsIn(['ASC', 'DESC'])
    order: 'ASC' | 'DESC';
}