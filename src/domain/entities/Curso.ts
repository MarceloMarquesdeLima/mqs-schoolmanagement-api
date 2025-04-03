@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Materia, materia => materia.curso)
  materias: Materia[];

  @OneToMany(() => Aluno, aluno => aluno.curso)
  alunos: Aluno[];

  @OneToOne(() => GradeCurricular, gradeCurricular => gradeCurricular.curso)
  gradeCurricular: GradeCurricular;
}

function Entity(): (target: typeof Curso) => void | typeof Curso {
    throw new Error("Function not implemented.");
}


function PrimaryGeneratedColumn(): (target: Curso, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function Column(): (target: Curso, propertyKey: "nome") => void {
    throw new Error("Function not implemented.");
}


function OneToMany(arg0: () => any, arg1: (materia: any) => any): (target: Curso, propertyKey: "materias") => void {
    throw new Error("Function not implemented.");
}


function OneToOne(arg0: () => any, arg1: (gradeCurricular: any) => any): (target: Curso, propertyKey: "gradeCurricular") => void {
    throw new Error("Function not implemented.");
}
