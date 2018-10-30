import React,{Component} from "react"
class ListComponent extends Component{
    render(){
        return [
            <li key='A'>A</li>
            <li key='B'>B</li>
            <li key='C'>C</li>
            <li key='D'>D</li>
        ]
    }
}