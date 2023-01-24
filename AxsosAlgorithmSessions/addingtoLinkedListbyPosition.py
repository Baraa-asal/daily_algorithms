class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
    
class LnkdLst:
    def __init__(self):
        self.head = None

    def insert_begining(self, val):
        new_node = Node(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node

    def print_list(self):
        values = ''
        current = self.head
        while current!= None:
            values += str(current.data) + " "
            current = current.next
        print(values)


    def addToListbyPosition(self, val, position):
        #1. allocate node to new element
        newNode = Node(val)

        #2. check if the position is > 0 
        if(position < 1):
            print("\nposition should be >= 1.")
        elif (position == 1):
        #3. if the position is 1, make next of the
        #   new node as head and new node as head
            newNode.next = self.head
            self.head = newNode
        else:    
        
        #4. Else, make a temp node and traverse to the 
        #   node previous to the position
            temp = self.head
            for i in range(1, position-1):
                if(temp != None):
                    temp = temp.next   
        
        #5. If the previous node is not null, make 
        #   newNode next as temp next and temp next 
        #   as newNode.
            if(temp != None):
                newNode.next = temp.next
                temp.next = newNode  
            else:
        
        #6. When the previous node is null
                print("\nThe previous node is null.")  
            
            

list = LnkdLst()
list.insert_begining(3)
list.insert_begining(2)
list.insert_begining(1)
list.print_list()
list.addToListbyPosition(4, 3)
list.addToListbyPosition(5, 4)
list.print_list()