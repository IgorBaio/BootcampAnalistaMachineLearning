import pandas as pd
import numpy as np #utilizada para tratar vetores e matrizes
import tensorflow as tf
import keras #utilizada para criar os modelos de deep learning
from keras.models import Sequential #utilizada para criar o modelo sequencial
from keras.layers import Activation #utilizada para obter a funcao de ativacao
from keras.layers import Dense, Flatten, Conv2D #utilizada para importar as camadas Dense e Flatten
from keras.optimizers import Adam #utilizada para importar o otimizador do tipo Adam
from keras.metrics import categorical_crossentropy #utilizada para avaliar o modelo
from keras.preprocessing.image import ImageDataGenerator #utilizada no pre-processamento das imagens
from keras.layers import BatchNormalization #utilizada para normalizar as "bateladas" no processo de treinamento
from keras.layers import * #importa todos os tipos de camada
from matplotlib import pyplot as plt #utilizada para realiza o plot dos gráficos
from sklearn.metrics import confusion_matrix #utilizada para  criar a matriz de confusao
import itertools #utilizada para criar os iterators (para os loops)
import matplotlib.image as mpimg #utilizada para realizar o plot das imagens
#from mlxtend.plotting import plot_confusion_matrix #utilizada para plotar a matriz de confusao


#caminhos para cada um dos conjuntos de imagens a serem utilizadas
caminho_treinamento = "/home/igorbaio/Documentos/BootcampAnalistaMachineLearning/Cap3/BD_treinamento" #dividido em 2 pastas (sadias e contaminadas) - 60/60
caminho_validacao = "/home/igorbaio/Documentos/BootcampAnalistaMachineLearning/Cap3/BD_validacao" #dividido em 2 pastas (sadias e contaminadas) - 20/20
caminho_teste = "/home/igorbaio/Documentos/BootcampAnalistaMachineLearning/Cap3/BD_teste" #dividido em 2 pastas (sadias e contaminadas) - 25/25

#---------------------------------------------------
# Conhecendo e Preparando o BD
#----------------------------------------------------

#Cria a batelada utilizando dados que estao no disco
#ImageDataGenerator - utilizada para adicionar as imagens e converter em um formato padrao (224x224)
batelada_treino = ImageDataGenerator().flow_from_directory(caminho_treinamento, target_size=(224,224),classes=['sadias','contaminadas'], batch_size=10)
batelada_validacao=ImageDataGenerator().flow_from_directory(caminho_validacao,target_size=(224,224),classes=['sadias','contaminadas'],batch_size=5)
batelada_teste=ImageDataGenerator().flow_from_directory(caminho_teste,target_size=(224,224),classes=['sadias','contaminadas'],batch_size=10)

#utilizado para interar sobre a batelada de dados
img, labels = next(batelada_treino)

# utilizado para mostrar as imagens
plt.figure()
plt.imshow(img[0].astype(np.uint8)) #seleciona a imagem da posicao [0]
plt.title("{}".format(labels[0]))
plt.show() 

#---------------------------------------------------
# Criando o primeiro modelo de classificação
#----------------------------------------------------

model = Sequential()
model.add(Conv2D(32,(3,3), activation = 'relu', imput_shape=(224,224,3))) #32 = numero de neuronios na camada/ (3,3)= filtro utilizado para percorrer  
#a imagem / (224,224,3)= tamanho das imagens comprimento 224x largura 224 e RGB=3
model.add(Flatten()) #utilizada para criar um vetor para a entrada de dados na camada de saida
model.add(Dense(2, activation = 'softmax')) #camada de saida da rede 2 neuronios. 10 = sadia / 01 = contaminada

#mostrando a configuração da rece CNN criada
print(model.summary())

#definindo o timizador e a funçao perda
model.compile(Adam(lr=0.0001), loss = 'categorical_crossentropy', metrics=['accuracy'])


#treinamento do modelo
history=model.fit_generator(batelada_treino, steps_per_epoch=12, validation_data=batelada_validacao, validation_steps=4,epochs=20, verbose=2)
#deve ser utilizada, pois estamos realizando o terinamento via batelada
#steps_per_epoch = define a quantidade de epocas utilizadas para treinamento, baseando-se no numero de dados utilizados
#vamos utilizar 120 imagens para treinamento (60 sadias e 60 contaminadas), como a batelada é de 10, temos 120/10 = 12 vezes
#validation_data = utilizado para gerar a validacao (compara o desempenho do treinamento com o valor rela): a cada epoca de treinamento,
#compara o resultado obtido com a previsão realizada nas imagens de vaidacao
#verbose =2 - indica o que desejamos exibir na saida do treinamento


#Lista os dados historicos do treinamento
print(history.history.keys())
#summarize history para a accuracy
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('model accuracy')
plt.ylabel('accuracy')
plt.xlabel('epoch')
plt.legend(['Treinamento', 'Teste'], loc='upper left')
plt.show()

