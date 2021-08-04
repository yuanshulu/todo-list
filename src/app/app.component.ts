import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = new FormControl('');
  taskList = [
    {title: 'Hit the gym', checked: true},
    {title: 'Pay bills', checked: false},
    {title: 'Meet George', checked: false},
    {title: 'Buy eggs', checked: false},
    {title: 'Read a book', checked: false},
    {title: 'Organize office', checked: false},
  ]
  newTask() {
    const title = this.task.value
    if(!title) {
      alert('you must write something!')
      return
    }
    this.taskList.push({
      title: title,
      checked: false
    })
    this.task.setValue('')
  }
  checkElement(index:number) {
    this.taskList[index].checked = !this.taskList[index].checked
  }
  deleteElement(index:number) {
    this.taskList.splice(index, 1)
  }
}
