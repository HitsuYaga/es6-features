var person = {
  name: 'Hitsu',
  likes : ['Dev', 'Gaming', 'Travel'],
  greetUser: function () {
    return () => {
      console.log(`Hello ${this.name}`)
    }
  },
  printLikes: function () {
    return () => {
      this.likes.forEach((like) => {
        console.log(`${this.name} like ${like}`)
      })
    }
  }
}

person.printLikes()();