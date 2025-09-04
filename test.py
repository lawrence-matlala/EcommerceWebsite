from typing import Optional,List
from collections import deque

class TreeNode:
    def __init__(self,val=0,left=None,right=None):
        self.val=val
        self.left=left
        self.right=right

class Solution:

    def levelOrder(self,root:Optional[TreeNode])->List[List[int]]:
        if not root:
            return []
        
        q=deque([root])
        result=[]

        while q:
            qLen =len(q)

            levelList=[]

            for _ in range(qLen):
                node=q.popleft()
                levelList.append(node.val)

                if node.left:
                    q.append(node.left)

                if node.right:
                    q.append(node.right)

            result.append(levelList)

        return result