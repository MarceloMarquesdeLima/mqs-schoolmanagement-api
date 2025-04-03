import { Materia } from "./Materia";

@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Materia, materia => materia.professor)
  materias: Materia[];
}

function Entity(): (target: typeof Professor) => void | typeof Professor {
    throw new Error("Function not implemented.");
}


function PrimaryGeneratedColumn(): (target: Professor, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function Column(): (target: Professor, propertyKey: "nome") => void {
    throw new Error("Function not implemented.");
}


function OneToMany(arg0: () => any, arg1: (materia: any) => any): (target: Professor, propertyKey: "materias") => void {
    throw new Error("Function not implemented.");
}
