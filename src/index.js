import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ChatBot from './containers/ChatBotContainer';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ChatBot/>
  </Provider>
  ,
  document.getElementById('root')
);

// class Timer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: props.value ? props.value : 0
//     }
//     this.interval = props.interval ? props.interval : 10
//   }

//   render () {
//     return (
//       <div className='timer'>
//         <p>Таймер:</p>
//         <p>
//           <span>{ Math.round(this.state.value / 360000) } : </span>
//           <span>{ Math.round(this.state.value / 6000) } : </span>
//           <span>{ Math.round(this.state.value / 100) } . </span>
//           <span>{ this.state.value % 100 }</span>
//         </p>
//       </div>
//     );
//   }

//   increment() {
//     this.setState((prevState, props) => {
//       return {
//         value: prevState.value + 1
//       }
//     })
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.increment(), this.interval);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
// }

// ReactDOM.render(
//   <div>
//     <Timer increment={5} />
//     <Timer value={1000} />
//     <Timer value={100000} increment={100} />
//   </div>,
//   document.getElementById('root')
// )




// class Conditioner extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {temperature: 0};

//     // Привязка необходима, чтобы сделать this доступным в коллбэке
//     this.onIncrease = this.onIncrease.bind(this);
//     this.onDecrease = this.onDecrease.bind(this);
//   }

//   onIncrease(){
//     this.setState(prevState => ({
//       temperature: prevState.temperature + 1
//     }))
//   }

//   onDecrease(){
//     this.setState(prevState => ({
//       temperature: prevState.temperature - 1
//     }))
//   }

//   render() {
//     return (
//       <div className='conditioner'>
//         <h2>Текущая температура: {this.state.temperature}</h2>
//         <button onClick={this.onDecrease}>-</button>
//         <button onClick={this.onIncrease}>+</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Conditioner />,
//   document.getElementById('root')
// )




// function ErrorMessage(props) {
//   return <h3>Произошла ошибка на сервере. Не удалось сохранить ваши данные.</h3>;
// }

// function SuccessMessage(props) {
//   return <h3>Ваши данные успешно сохранены!</h3>;
// }

// function Response(props) {
//   return props.isSuccess ? <SuccessMessage/> : <ErrorMessage/>
// }

// ReactDOM.render(<Response isSuccess={true} />,  document.getElementById('root'));

// function SetFireButton(props) {
//   return (<button className="orange" onClick={props.onClick}>Зажечь</button>);
// }

// function SnuffOutButton(props) {
//   return (<button className="blue" onClick={props.onClick}>Потушить</button>);
// }

// function Indicator(props) {
//   return (<p>{props.isBurning ? 'Горит!' : 'Не горит!'}</p>);
// }

// class FirePlace extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isBurning: false};
//     this.onSetFire = this.onSetFire.bind(this);
//     this.onSnuffOut = this.onSnuffOut.bind(this);
//   }

//   onSetFire() {
//     this.setState({isBurning: true});
//   }

//   onSnuffOut() {
//     this.setState({isBurning: false});
//   }

//   render() {
//     const isBurning = this.state.isBurning;

//     let button = null;
//     if(isBurning){
//       button = <SnuffOutButton onClick={this.onSnuffOut} />
//     } else {
//       button = <SetFireButton onClick={this.onSetFire} />;
//     }
//     return (
//       <div>
//         <Indicator isBurning={isBurning} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <FirePlace />,
//   document.getElementById('root')
// )

// function Console(props) {//   const errors = props.errors;
//   return (
//     <p>
//       <h3>Attention!</h3>
//       {errors.length > 0 &&
//         <p>You have <b>{errors.length}</b> errors.</p>
//       }
//     </p>
//   );
// }

// const errors = [
// 'Failed to load resource: net::ERR_INSECURE_RESPONSE',
// 'TypeError: e is undefined',
// 'Uncaught ReferenceError: calculate is not defined'
// ];

// ReactDOM.render(<Console errors={errors} />, document.getElementById('root'));

// function DangerAlert(props) {
//   return (
//     <h3 className="alert alert-danger">{props.text}</h3>
//   );
// }

// class Application extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isDangerAlertShowed: true}
//     this.toggleDangerAlert = this.toggleDangerAlert.bind(this);
//   }

//   toggleDangerAlert() {
//     this.setState(prevState => ({
//       isDangerAlertShowed: !prevState.isDangerAlertShowed
//     }));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.isDangerAlertShowed ?
//             <DangerAlert text={'Внимание! В приложении возникли некоторые проблемы!'} /> : null}
//         <button onClick={this.toggleDangerAlert}>
//           {this.state.isDangerAlertShowed ? 'Скрыть' : 'Показать'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Application />, document.getElementById('root'));

// function Chat(props) {
//   const users = props.users;

//   const userList = (
//     <p> Пользователи чата:
//       {users.map((user) =>
//         <b key={user.id}> {user.name}; </b>
//       )}
//     </p>
//   );

//   const messageList = props.messages.map((message) => {
//     let author = null;

//     users.forEach((user) => {if(user.id === message.authorId) author = user});

//     return (
//       <p key={message.id}>
//         <b>{author.name}: </b>
//         <span>{message.message}</span>
//       </p>
//     )
//   });

//   return (
//     <p>
//       {userList}
//       {messageList}
//     </p>
//   );
// }

// const users = [
//   {id: 1, name: 'Вася'},
//   {id: 2, name: 'Петя'},
//   {id: 3, name: 'Ваня'}
// ];

// const messages = [
//   {id: 1, message: 'Всем привет!', authorId: 1},
//   {id: 2, message: 'И тебе привет!', authorId: 2},
//   {id: 3, message: 'Привет, Вася :)', authorId: 3}
// ];

// ReactDOM.render(<Chat users={users} messages={messages}/>, document.getElementById('root'))


// class LoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {login: '', password: ''};

//     this.onChangeLogin = this.onChangeLogin.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit(event){
//     alert(`${this.state.login}, добро пожаловать!`);
//     event.preventDefault();
//   }

//   onChangePassword(event){
//     this.setState({password: event.target.value});
//     console.log(event.target.value)
//   }
  
//   onChangeLogin(event) {
//     this.setState({login: event.target.value});
//     console.log(event.target.value)
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <p><label> Логин: <input type="text" name="login" value={this.state.login}
//                          onChange={this.onChangeLogin}/></label></p>
//         <p><label> Пароль: <input type="password" name="password" value={this.state.password}
//                           onChange={this.onChangePassword}/></label></p>
//         <p><input type="submit" value="Submit" /></p>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<LoginForm />,  document.getElementById('root'));




// class MessageForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {email: '', message: 'Текст сообщения'};

//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangeMessage = this.onChangeMessage.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onSubmit(event){
//     alert(`Сообщение успешно отправлено получателю "${this.state.email}"`);
//     event.preventDefault();
//   }

//   onChangeMessage(event){
//     this.setState({message: event.target.value});
//   }

//   onChangeEmail(e) {
//     this.setState({email: e.target.value});
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <p><label> email получателя: <input type="text" name="email" value={this.state.email}
//                          onChange={this.onChangeEmail}/></label></p>
//         <p><label>Текст сообщения: <textarea type="text" name="message" value={this.state.message}
//           onChange={this.onChangeMessage}/></label></p>
//         <p><input type="submit" value="Submit" /></p>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MessageForm />,  document.getElementById('root'));




// class LanguageForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {language: 'JavaScript'};

//     this.onChangeSelect = this.onChangeSelect.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChangeSelect(event) {
//     this.setState({language: event.target.value});
//   }

//   onSubmit(event) {
//     alert(`Вы выбрали язык: ${this.state.language}`);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <label>
//           Выберите язык программирования:
//           <select value={this.state.language} onChange={this.onChangeSelect}>
//             <option value="C++">C++</option>
//             <option value="Java">Java</option>
//             <option value="C#">C#</option>
//             <option value="JavaScript">JavaScript</option>
//             <option value="Scala">Scala</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<LanguageForm />,  document.getElementById('root'));




// class PersonForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {sex: 'female', firstName: '', lastname: '', email: '', phone: ''};
//     this.onChangeInput = this.onChangeInput.bind(this);
//   }

//   onChangeInput(event) {
//     const name = event.target.name;
//     this.setState({[name]: event.target.value});
//   }

//   render() {
//     return (
//       <form>
//         <label>First Name: <input name="firstName"  type="text"
//                              value={this.state.firstName} onChange={this.onChangeInput}/></label>
//         <label> Last Name: <input name="lastName"  type="text"
//                              value={this.state.lastName} onChange={this.onChangeInput}/></label>
//         <label> Email: <input name="email"  type="email"
//                              value={this.state.email} onChange={this.onChangeInput}/></label>
//         <label> Phone: <input name="phone"  type="tel"
//                              value={this.state.phone} onChange={this.onChangeInput}/></label>
//         <label> Sex: <select name="sex"  value={this.state.sex} onChange={this.onChangeInput}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<PersonForm />,  document.getElementById('root'));




// const UNIT = {
//   KPH: 'Км/ч',
//   MPH: 'Миль/ч'
// };

// const MAX_SPEED_IN_CITY_IN_KPH = 60

// function SpeedDetector(props) {
//   const unit = props.unit;
//   if (props.speed >= props.maxSpeed) {
//     return <div>Скорость в {UNIT[unit]} превышена!</div>;
//   }
//   return <div>Скорость в {UNIT[unit]} не превышена.</div>;
// }

// function isValidSpeed(value){
//   if(value !== null && value !== '' && value !== undefined){
//     let intValue = parseInt(value);
//     return !(isNaN(intValue) || !isFinite(intValue));
//   }  
//   return false
// }

// function convertToKph(mph) {
//   return mph * 1.61;
// }

// function convertToMph(kph) {
//   return kph / 1.61;
// }

// function сonvertSpeed(value, convertor) {  
//   if(isValidSpeed(value)){
//     const intValue = parseInt(value)
//     let converted = convertor(intValue);
//     let rounded = Math.round(converted * 100) / 100
//     return rounded.toString()
//   }  
//   return '';
// }

// class SpeedSetter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     this.props.onChangeSpeed(e.target.value);
//   }

//   render() {
//     let speed = this.props.speed;
//     let unit = this.props.unit;
//     return (
//       <p>
//         <span>Введите скорость в "{UNIT[unit]}": </span>
//         <input value={speed} onChange={this.onChange}/>
//       </p>
//     );
//   }
// }

// class SpeedRadar extends React.Component {
//   constructor(props){
//     super(props);
//     this.onChangeSpeedInKph = this.onChangeSpeedInKph.bind(this);
//     this.onChangeSpeedInMph = this.onChangeSpeedInMph.bind(this);
//     this.state = {speed: 0, unit: 'KPH'};
//   }  
  
//   onChangeSpeedInKph(speed) {
//     this.setState({unit: 'KPH', speed});
//   }
  
//   onChangeSpeedInMph(speed) {
//     this.setState({unit: 'MPH', speed});
//   }
  
//   render() {
//     const unit = this.state.unit;
//     const speed = this.state.speed;
//     const kph = unit === 'MPH' ? сonvertSpeed(speed, convertToKph) : speed;
//     const mph = unit === 'KPH' ? сonvertSpeed(speed, convertToMph) : speed;

//     return (
//       <div>
//         <SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph}/>
//         <SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph}/> 
//         <SpeedDetector speed={kph} unit="KPH" maxSpeed={MAX_SPEED_IN_CITY_IN_KPH}/>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<SpeedRadar />, document.getElementById('root'));

// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2">
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     const rows = [];
//     let lastCategory = null;

//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name}
//         />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
  
//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }
  
//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }
  
//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input
//             type="checkbox"
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };
    
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }

//   handleFilterTextChange(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }
  
//   handleInStockChange(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange={this.handleFilterTextChange}
//           onInStockChange={this.handleInStockChange}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }


// const PRODUCTS = [
//   {category: 'Sport', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sport', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sport', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('root')
// );