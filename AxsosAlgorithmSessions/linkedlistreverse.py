# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None
    
# class LnkdLst:
#     def __init__(self):
#         self.head = None

#     def insert_begining(self, val):
#         new_node = Node(val)
#         current_head = self.head
#         new_node.next = current_head
#         self.head = new_node
#     def reverse_list(self):
#         if self.head == None:
#            return
#         prev = None
#         current = self.head
#         while current != None:
#             next = current.next
#             current.next = prev
#             prev = current
#             current = next
#         self.head = prev
#     def print_list(self):
#         values = ''
#         current = self.head
#         while current!= None:
#             values += str(current.data) + " "
#             current = current.next
#         print(values)
         
# list = LnkdLst()
# list.insert_begining(5)
# list.insert_begining(4)
# list.insert_begining('hello')
# list.print_list()
# list.reverse_list()
# list.print_list()

