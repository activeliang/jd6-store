class ProductsController < ApplicationController
    def index
    @products = Product.all
  end

    def show
      @product = Product.find(params[:id])
      if @product.id == 1
        render '_1'
      elsif @product.id == 2
        render '_2'
      elsif @product.id == 3
        render '_3'
      elsif @product.id == 4
        render '_4'
      elsif @product.id == 5
        render '_5'
      elsif @product.id == 6
        render '_6'
      elsif @product.id == 7
        render '_7'
      elsif @product.id == 8
        render '_8'
      elsif @product.id == 9
        render '_9'
      elsif @product.id == 10
        render '_10'
      elsif @product.id == 11
        render '_11'
      elsif @product.id == 12
        render '_12'
      end
    end

    def create
      @product = Product.new(product_params)

      if @product.save
        redirect_to products_path
      else
        render :new
      end
    end

       def add_to_cart
       @product = Product.find(params[:id])
           if !current_cart.products.include?(@product)
             current_cart.add_product_to_cart(@product)
      #  -     flash[:notice] = "成功加入购物车"
             flash[:notice] = "你已成功将 #{@product.title} 加入购物车"
           else
             flash[:warning] = "你的购物车内已有此物品"
           end
            redirect_to :back
     end
end
