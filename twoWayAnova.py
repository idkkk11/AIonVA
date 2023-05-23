# Import the necessary libraries
import pandas as pd
import statsmodels.api as sm
from statsmodels.formula.api import ols

# Read the data from a file or create a DataFrame
data = pd.read_csv('prolific200.csv')

# print(data.VariableA)

# a = data.VariableA
# b = data.VariableB
# reliability = data.Reliability
# understanding = data.Understanding
# familiarity = data.Familiarity
# intentions = data.Intentions
# propensity = data.Propensity
# trust = data.Trust

# print(trust)

# df = pd.DataFrame({a, b, trust})
# print(df)

# Fit the two-way ANOVA model
model = ols('Reliability ~ VariableA * VariableB', data=data).fit()

# Perform the ANOVA
anova_table = sm.stats.anova_lm(model, typ=2)

print(anova_table)

# Fit the two-way ANOVA model
model = ols('Understanding ~ VariableA * VariableB', data=data).fit()

# Perform the ANOVA
anova_table = sm.stats.anova_lm(model, typ=2)

print(anova_table)

# Fit the two-way ANOVA model
model = ols('Familiarity ~ VariableA * VariableB', data=data).fit()

# Perform the ANOVA
anova_table = sm.stats.anova_lm(model, typ=2)

print(anova_table)

# Fit the two-way ANOVA model
model = ols('Intentions ~ VariableA * VariableB', data=data).fit()

# Perform the ANOVA
anova_table = sm.stats.anova_lm(model, typ=2)

print(anova_table)

# Fit the two-way ANOVA model
model = ols('Propensity ~ VariableA * VariableB', data=data).fit()

# Perform the ANOVA
anova_table = sm.stats.anova_lm(model, typ=2)

print(anova_table)

# Fit the two-way ANOVA model
model = ols('Trust ~ VariableA * VariableB', data=data).fit()

# Perform the ANOVA
anova_table = sm.stats.anova_lm(model, typ=2)

print(anova_table)