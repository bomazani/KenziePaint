Bitmap.prototype.fill = function(row, col, new_color) {
    const old_color = this.grid[row][col];
    if(old_color === new_color) return;
    this.setColor(row, col, new_color);

    var queue = [];
    
    // The rest of the flood fill algorithm is given in pseudo-code below.
    // Convert the following pseudo-code comments into javascript
    // to complete the implementation of this method.
    //
    //
    // Push the coordinates [row, col] onto the queue.
    queue.push(row);
    queue.push(col);
    // console.log(queue);
    // While the queue is not empty:
    while(queue.length>0){
        //    Shift a pair of coordinates [r,c] off the front of the queue.
        var tmpRow=queue.shift();
        var tmpCol=queue.shift();
        
        //    The 4-connected neighbors are the cells above, below, left, and right.
        this.setColor(tmpRow, tmpCol, new_color);
        var originalBoard=this.grid;
        var north=tmpRow-1;
        var south=tmpRow+1;
        var west=tmpCol-1;
        var east=tmpCol+1;
        
        if (originalBoard[north][tmpCol] === old_color) {
            queue.push(north);
            queue.push(tmpCol);       
        }
            
        if (originalBoard[south][tmpCol] === old_color) {
            queue.push(south);
            queue.push(tmpCol); 
        }
                
        if (originalBoard[tmpRow][west] === old_color) {
            queue.push(tmpRow);
            queue.push(west); 
        }

        if (originalBoard[tmpRow][east] === old_color) {
            queue.push(tmpRow);
            queue.push(east); 
        }
        
        }
    }
    
    
    //    Check each of those 4 neighbors:
    //       If the neighbor is old_color:
    //          Set the neighbor to new_color.
    //          Add the neighbors coordinates to the queue
    //          (to ensure we later check its neighbors as well).
