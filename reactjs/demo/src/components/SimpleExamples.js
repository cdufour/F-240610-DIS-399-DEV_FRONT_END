import { Simple1, Simple2, Simple3, Simple4, Simple5, Simple6 } 
    from './simples'

export default function SimpleExamples() {
    return (
        <div>
            <Simple6 data={{n1:10, n2:5}} />
            <Simple5 operand1={2} operand2={3} operator="sub" />
            <Simple5 operand1={2} operand2={3} operator="mul" />
            <Simple5 operand1={2} operand2={3} operator="add" />
            <Simple4 accessible={true} />
            <Simple4 accessible="true" />
            <Simple3 training="Angular" level="Débutant" duration="3" />
            <Simple2 message="Buon appetito !"/>
            <Simple2 message="Ciao !"/>
            <Simple1 />
        </div>
    )
}