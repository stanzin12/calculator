import React, { useState } from 'react';





const App = () => {
    const [state, buttonn] = useState("");


    const reducerr = () => {
        if (state.includes(".")) {
            return 0;
        } else {
            buttonn(state + ".");
        }
    }

function syn(x){
    var v=state[state.length-1]
    if(v==='*'|| v==='+'|| v==='/' || v==='-'){
       state[state.length-1]=x;
       buttonn(state);
    }else{
      buttonn(state+x);
    }
}

function Hea(){
    if(state==='0'){
        return 0
    }
    var v=state.length-1
    if(state[v]==='0' && (state[v-1]==='+' || state[v-1]==='-' || state[v-1]==='*' || state[v-1]==='/')){
        return 0
    }
    else{
        buttonn(state+'0')
    }
    
}

    function split(str) {
        var sa = []
        var i = 0
        var asa = ''
        while (i < str.length) {
            if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') {
                if (asa != "") {
                    sa.push(parseFloat(asa))
                }
                sa.push(str[i])
                asa = ''
            }
            else {
                asa = asa + str[i]
            }
            i = i + 1
        }
        if (asa != "") {
            sa.push(parseFloat(asa))
        }
        return sa;


    }

    const operation = () => {

        let arr = split(state);
        var q=arr.length-1
        if (arr[0] != '+' && arr[0] != '*' && arr[0] != '/' && arr[0] != '-' && arr[q] != '+' && arr[q] != '*' && arr[q] != '/' && arr[q] != '-') {

        var p = 0
        var divident = 0
        var divisor = 0
        var r = 0

        while (arr.length > 1) {
            if (arr.includes("/")) {
                p = arr.indexOf('/')
                divident = arr[p - 1]
                divisor = arr[p + 1]
                r = divident / divisor
                arr.splice(p - 1, 3)
                arr.splice(p - 1, 0, r)
            }
            else if (arr.includes("*")) {
                p = arr.indexOf('*')
                divident = arr[p - 1]
                divisor = arr[p + 1]
                r = divident * divisor
                arr.splice(p - 1, 3)
                arr.splice(p - 1, 0, r)
            }
            else if (arr.includes("-")) {
                p = arr.indexOf('-')
                divident = arr[p - 1]
                divisor = arr[p + 1]
                r = divident - divisor
                arr.splice(p - 1, 3)
                arr.splice(p - 1, 0, r)
            }
            else if (arr.includes("+")) {
                p = arr.indexOf('+')
                divident = arr[p - 1]
                divisor = arr[p + 1]
                r = divident + divisor
                arr.splice(p - 1, 3)
                arr.splice(p - 1, 0, r)
            }
            console.log("loop", arr)
        }
         var a=arr[0];
         buttonn(a.toString());
        
        
        return 0

    }
    return 0

}


    return (

        <>
            <div className="grid">
                <div className="green">
                    <div className="upper">{state}
                    </div>
                    <div className="lower">{state}</div>
                </div>
                <button className='span' onClick={() => { buttonn("") }}>AC</button>
                <button onClick={() => { buttonn(state.substring(0, state.length - 1)) }} >DEL</button>
                <button onClick={()=>{ syn('/') } }>/</button>
                <button onClick={() => { buttonn(state + "1") }}>1</button>
                <button onClick={() => { buttonn(state + "2") }}>2</button>
                <button onClick={() => { buttonn(state + "3") }}>3</button>
                <button onClick={() => { syn('*') }}>*</button>
                <button onClick={() => { buttonn(state + "4") }}>4</button>
                <button onClick={() => { buttonn(state + "5") }}>5</button>
                <button onClick={() => { buttonn(state + "6") }}>6</button>
                <button onClick={() => { syn('+')}}>+</button>
                <button onClick={() => { buttonn(state + "7") }}>7</button>
                <button onClick={() => { buttonn(state + "8") }}>8</button>
                <button onClick={() => { buttonn(state + "9") }}>9</button>
                <button onClick={() => {syn('-')}}>-</button>
                <button onClick={reducerr}>.</button>
                <button onClick={() =>{Hea()}}>0</button>
                <button className='span' onClick={operation}>=</button>
            </div>
        </>
    )
}

export default App;