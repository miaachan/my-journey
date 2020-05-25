stack   index
----- 
 2    nth element
 3
 99
 .
 1    n/2 th element
 .
 -1   bottom of the stack(0th index)


No additional data structure is allowed.


stack   index
----- 
 2    3rd element
 99   n/2 th element    
 -1   bottom of the stack (0th index)

 n = 0, val = 2, res = 
      n = 1, val = 99, res = 
            n = 2, val = -1, res = 
                  empty, depth = 3, return 0;

            n = 2, val = -1, res = 0
      n = 1, val = 99, res = 0 (*depth/2 = 3/2 == 1) return val
 n = 0, val = 2, res = 1 (<- val(99) from n=1)

  

int middle(stack* s, int n, int* depth) {
  if (stack_empty(s)) {
    *depth = n;
    return 0; //return something, doesn't matter..
  }
  int val = stack_pop(s);
  int res = middle(s, n+1, depth);
  stack_push(s, val);
  if (n == *depth/2)
    return val;
  return res;
}

int depth;
middle(&stack, 0, &depth);