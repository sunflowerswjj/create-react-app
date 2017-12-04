//1,当需要在外界配置组件的时候要用属性，属性可以在render里调用
//2,如果组件里需要定一些变化的数据，可用状态
//3.如果组件里的一个数据不需要render里使用，就不要状态，可以放在其他的自定义属性里
class Component{
    constructor(props){
        this.props=props;
    }
    createDOMFromString(domStr){
        let div=document.createElement("div");
        div.innerHTML=domStr;
        return div.children[0];
    };
    setState(newState){
        // this.state={...this.state,...newState};
        this.state=Object.assign({},this.state,newState);
        let oldEle=this.element;//缓存老的元素
        let newElement=this.render();
        let parent=oldEle.parentNode;
        parent.replaceChild(newElement,oldEle);
    }

    handleClick(){
        this.setState({like:!this.state.like})
    }

}
class LikeButton extends Component{
    constructor(props){
        super(props);
        this.props=props;
        //既不是状态也不是属性
        this.something="something";
       this.state={like:false};
    }

    render() {
        this.element=this.createDOMFromString(`<button class="like-btn">
            <span class="like-text" style="color:${this.props.color}">${this.state.like?"取消":"点赞"}</span>
        </button>`);
        this.element.addEventListener("click",this.handleClick.bind(this));
        return this.element;

    }
}