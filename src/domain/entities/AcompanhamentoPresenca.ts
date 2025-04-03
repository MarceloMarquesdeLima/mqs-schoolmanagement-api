import { Aluno } from "./Aluno";
import { Curso } from "./Curso";

@Entity()
export class AcompanhamentoPresenca {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Aluno, aluno => aluno.presencas)
  aluno: Aluno;

  @Column()
  data: Date;
}

function Entity(): (target: typeof AcompanhamentoPresenca) => void | typeof AcompanhamentoPresenca {
    throw new Error("Function not implemented.");
}


function PrimaryGeneratedColumn(): (target: AcompanhamentoPresenca, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}


function ManyToOne(arg0: () => any, arg1: (aluno: any) => any): (target: AcompanhamentoPresenca, propertyKey: "aluno") => void {
    throw new Error("Function not implemented.");
}


function Column(): (target: AcompanhamentoPresenca, propertyKey: "data") => void {
    throw new Error("Function not implemented.");
}
