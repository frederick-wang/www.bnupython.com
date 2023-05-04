---
prev: ./ex4_crawler
---

# EX5: 机器学习作业

## 任务介绍

本次作业以kaggle数据科学竞赛的形式呈现。竞赛中，你将使用一些特征对公民的贷款审批状况进行二分类。具体细节请见[此处](https://www.kaggle.com/competitions/loan-status-binary-classification/overview)。

注意到，该比赛是私有比赛，需通过[本链接](https://www.kaggle.com/t/9396a44d01eb4156983cf68dc6f870fb)来参赛。


## 步骤

Step 1. 分析与预处理数据

- 对预测目标 **Y** 进行分析
  - 这是一个分类任务还是回归任务，这决定了你需要使用何种模型

- 对特征集 **X** 进行分析
  - 特征的含义是什么?
  - 是否包含缺省值?
  - 特征对预测有价值吗?
  - 特征需要数值化吗?

Step 2. 训练模型

- 测试各种模型
- 使用交叉验证
- 调参 (看文档)
- 模型集成

Step 3. 预测与提交

- 请于5月17日晚上12点前完成提交；
- 你需要对整个测试集的样本进行预测，但直到5月17日晚上12点前，你只能看到你的模型在测试集中40%的样本上的预测结果，这部分数据称为public测试集。你的模型在剩下的60%的样本（private测试集）上的预测结果将于5月18日公布。这样做的目的是为了防止你的模型过拟合public测试集，从而提高模型的泛化能力。
- 请将实验思路、流程、代码等整理到一个notebook中，直接在kaggle平台上提交。**注意在文件的第一个cell中注明你的姓名和学号。**

## 温馨提示

1. 请务必阅读kaggle上对本任务的背景介绍、数据介绍、比赛规则介绍等全部信息；
2. **不要**在`Submit Prediction`中直接进行`File Upload`，即不要只提交一个`submission.csv`文件。你需要提交一个后缀为`.ipynb`的notebook文件；
3. 你的notebook需要生成一个形如`sample_submission.csv`的文件`submission.csv`，将其放置在`/kaggle/working/`目录下，这样kaggle平台才能正确读取你的预测结果。你可以通过`pd.to_csv()`方法来生成该文件；
