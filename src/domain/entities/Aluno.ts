@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Curso, curso => curso.alunos)
  curso: Curso;

  @OneToMany(() => AcompanhamentoPresenca, presenca => presenca.aluno)
  presencas: AcompanhamentoPresenca[];
}

function Entity(): (target: typeof Aluno) => void | typeof Aluno {
    throw new Error("Function not implemented.");
}


function PrimaryGeneratedColumn(): (target: Aluno, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function Column(): (target: Aluno, propertyKey: "nome") => void {
    throw new Error("Function not implemented.");
}


function ManyToOne(arg0: () => any, arg1: (curso: any) => any): (target: Aluno, propertyKey: "curso") => void {
    throw new Error("Function not implemented.");
}


function OneToMany(arg0: () => any, arg1: (presenca: any) => any): (target: Aluno, propertyKey: "presencas") => void {
    throw new Error("Function not implemented.");
}
