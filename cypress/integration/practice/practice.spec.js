import { equal } from "uri-js";

describe('React TodoMVC practice', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8888')
  })

  it('adds five todos', () => {
    // Without using the cy.createDefaultTodos() custom command
    // write a test that asserts you can add 5 todos
    // Hint: make sure to assert the length is equal to 5
    
    /// Arrange
    cy.get('.new-todo')

    /// Act
      .type('Go to Gym{enter}')
      .type('Go to Baseball Game{enter}')
      .type('Get Eggs{enter}')
      .type('Wash Dishes{enter}')
      .type('Buy Towels{enter}')

    /// Assert
    cy.get('.todo-list li')
    .should('have.length' ,5)

  })

  it('focuses on the todo input field, when the app is first opened', () => {
    // Write a test that asserts that the input field
    // is focused automatically when the app is first loaded.
    // Hint: you will need to use cy.focused()
    // https://docs.cypress.io/api/commands/focused
  //  cy.get('.new-todo')
  cy.focused().should('have.class', 'new-todo')
})

  it.only('should clear text input field when an item is added', () => {
    // Write a test that ensures that the input field is cleared
    // after adding a todo
    
    /// Arrange
    cy.get('.new-todo')

    /// Act
    .type('Go to Gym{enter}')
    
    /// Assert
    cy.get('.new-todo')
    .should('have.text', '')
  })
   

  it('can mark a todo as "completed"', () => {
    // Write a test that ensures that a todo can be "completed"
    // Hint: You will need to verify the class name of the completed todo
    
    /// Arrange
    cy.get('.new-todo')
    .type('Go to Gym{enter}')

    /// Act
    cy.get('.todo-list li')
    .eq(0)
    .find('.toggle').check()

    /// Assert
    cy.get('.todo-list li')
    .eq(0)
    .should('have.class', 'completed')

  })

  it('the "Clear completed" button clears all completed todos', () => {
    // Write a test that ensures that the "Clear completed" removes
    // all completed todos from the app
    // Hint: You will need to verify the class name of the completed todo
   
    /// Arrange
    cy.get('.new-todo')
    .type('Go to Gym{enter}')
    
    /// Act 
    cy.get('.todo-list li')
    .eq(0)
    .find('.toggle').check()

    cy.get('.clear-completed').click()

    /// Assert
    cy.get('.todo-list li').should('have.length' ,0)
  })
   

  it.only('allows you to edit a todo', () => {
    // Write a test that ensures that you can edit a todo
    // Hint: You will need to use cy.dblclick()
    // https://docs.cypress.io/api/commands/dblclick
    
    /// Arrange
    cy.get('.new-todo')
    .type('Go to Gym{enter}')

    /// Act
    cy.get('.todo-list li')
    .eq(0)
    .dblclick()
    .clear()
    .type('Get water{enter}')

    /// Assert 
    cy.get('.todo-list li')
    .eq(0)
    .should('have.text', 'Get water')
    
  })
   
  it.only('should save edits on blur', () => {
    // Write a test that ensures that an edited todo is saved when it is blurred
    // Hint: You will need to use cy.blur()
    // https://docs.cypress.io/api/commands/blur
    
    
    cy.get('.new-todo')
    .type('Go to Gym{enter}')
    
    cy.get('.todo-list li')
    .eq(0)
    .dblclick()
    .clear()
    .type('Get water').blur()

  })
   
  it('should display the current number of todo items', () => {
    // Write a test that ensures that the app counts the correct number of todos
    // left to be completed, i.e "3 items left" in the bottom left corner.
  }) 
   

  it('should persist its data after a page refresh', () => {
    // Write a test that ensures that the todos are persisted in the app
    // after the browser refreshes the page
    // Hint: You will need to use cy.reload()
    // https://docs.cypress.io/api/commands/reload
  })
   

  it('can display only completed todos', () => {
    // Write a test that ensures that only the completed todos are
    // displayed when the "Completed" button is clicked at the bottom
  })
  })