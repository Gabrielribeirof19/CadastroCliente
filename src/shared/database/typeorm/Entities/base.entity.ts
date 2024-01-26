import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: new Date()})
    createdAt: Date;

    @Column({ default: new Date()})
    updatedAt: Date;

    @Column({ default: true })
    isActive: boolean;
}