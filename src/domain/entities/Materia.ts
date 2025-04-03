@Entity()
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Curso, curso => curso.materias)
  curso: Curso;

  @ManyToOne(() => Professor, professor => professor.materias)
  professor: Professor;
}

function Entity(): (target: typeof Materia) => void | typeof Materia {
    throw new Error("Function not implemented.");
}
function PrimaryGeneratedColumn(): (target: Materia, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}

function Column(): (target: Materia, propertyKey: "nome") => void {
    throw new Error("Function not implemented.");
}

function ManyToOne(arg0: () => any, arg1: (curso: any) => any): (target: Materia, propertyKey: "curso") => void {
    throw new Error("Function not implemented.");
}

