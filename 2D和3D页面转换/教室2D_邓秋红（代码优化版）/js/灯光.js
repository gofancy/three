class 灯光{
    constructor(){

        this.排灯状态=[false,false,false,false]
        this.风扇状态=[false,false,false]

        this.总开关状态=false

        this.灯组 = []
        this.风扇 = []
    }
    
    总闸开(状态,物体组,样式){
        //
        物体组.forEach((item,index)=>{
            // 当是灯对象时
            if( 状态[index] ){

                if(状态 == this.排灯状态){
                    item.classList.add(样式)

                }else if(状态 == this.风扇状态 ){
                    item.children[0].classList.add('rotate-fan')
                    item.children[1].classList.add('rotate-fan')
                }
            }
        })
    }

    总闸关(){
        this.灯组.forEach((item,index)=>{
            item.classList.remove("white-light")
        })
        // 风对象时因为动画是给fan的两个子类删除
        this.风扇.forEach((item,index)=>{
            item.children[0].classList.remove('rotate-fan')
            item.children[1].classList.remove('rotate-fan')
        })
    }

    风扇转(index){
        this.风扇[index].children[0].classList.toggle('rotate-fan')
        this.风扇[index].children[1].classList.toggle('rotate-fan')
    }

}//