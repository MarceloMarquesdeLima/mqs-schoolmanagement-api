import { Curso } from "./Curso";
import { Materia } from "./Materia";

@Entity()
export class GradeCurricular {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Curso, curso => curso.gradeCurricular)
  @JoinColumn()
  curso: Curso;

  @OneToMany(() => Materia, materia => materia.curso)
  materias: Materia[];
}

function Entity(): (target: typeof GradeCurricular) => void | typeof GradeCurricular {
    throw new Error("Function not implemented.");
}


function PrimaryGeneratedColumn(): (target: GradeCurricular, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function OneToOne(arg0: () => any, arg1: (curso: any) => any): (target: GradeCurricular, propertyKey: "curso") => void {
    throw new Error("Function not implemented.");
}


function JoinColumn(): (target: GradeCurricular, propertyKey: "curso") => void {
    throw new Error("Function not implemented.");
}


function OneToMany(arg0: () => any, arg1: (materia: any) => any): (target: GradeCurricular, propertyKey: "materias") => void {
    throw new Error("Function not implemented.");
}
