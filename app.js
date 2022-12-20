
// FUNCTIONAL COMPONENT


// const Container =()=>{
//     return React.createElement('div',null,'hey kalvians! welcome to react learning',
//     React.createElement('div',null,'lets rock and roll'))
// }
// const container = document.getElementById('react-container')
// ReactDOM.render(React.createElement(Container),container)



// CLASS COMPONENT

// class Container extends React.Component{
//     render(){
//     return React.createElement('div',null,'hey kalvians! welcome to react learning',
//     React.createElement('div',null,'lets rock and roll'))
//     }
// }

// const container = document.getElementById('react-container')
// ReactDOM.render(React.createElement(Container),container)



class ReactContainer extends React.Component{

      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>This is babel</div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer/>,container);    