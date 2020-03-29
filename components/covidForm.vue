<template>
<div>
    <div v-if="pageInfo">
  <el-form  :model="form1" :rules="rules1" ref="form1"  class="ruleForm" label-position="top" align="center" >
<el-form-item label="What State Did You Live In" prop="state">
            <el-select
          v-model="form1.state"
          filterable
          placeholder="Pick a state"
        >
          <el-option
            v-for="item in states"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
          </el-form-item>
          <el-form-item label="Gender?" prop="gender">
        <el-select
          v-model="form1.gender"
          filterable
          placeholder="Gender"
        >
      <el-option label="Male" value="male"></el-option>
      <el-option label="Female" value="female"></el-option>
          
        </el-select>
  </el-form-item>
            <el-form-item label="Are you pregnant or breastfeeding??" prop="pregnant">
        <el-select
          v-model="form1.pregnant"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
              <el-form-item label="How old are you?" prop="age">
        <el-input v-model="form1.age" size="medium" type="number"> </el-input>
  </el-form-item>
              <el-form-item label="Have you been tested?" prop="testing">
        <el-select
          v-model="form1.testing"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
                <el-form-item label="Do you have a fever above 100.0°F? (°37.8C)" prop="fever">
        <el-select
          v-model="form1.fever"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
    <el-form-item label="Have you been hospitalized for COVID-19 or COVID-19-like symptoms?" prop="hospital">
        <el-select
          v-model="form1.hospital"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
      <el-form-item label="How long have you been in the hospital for COVID-19 (hours)?" prop="stay">
        <el-select
          v-model="form1.stay"
          filterable
          placeholder="True/False"
        >
      <el-option label="More than 72 hours" value="true"></el-option>
      <el-option label="Less than 72 hours" value="false"></el-option>
        </el-select>
  </el-form-item>
        <el-form-item label="Have you or are you currently using a ventilator for COVID-19 related symptoms?" prop="ventilator">
        <el-select
          v-model="form1.ventilator"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
         <el-form-item label="Have you been admitted into the ICU for COVID-19 or COVID-19-like symptoms?" prop="icu">
        <el-select
          v-model="form1.icu"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
           <el-form-item label="Do you have heart disease?" prop="heart">
        <el-select
          v-model="form1.heart"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
             <el-form-item label="Do you have diabetes?" prop="diabetes">
        <el-select
          v-model="form1.diabetes"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
               <el-form-item label="Do you have asthma?" prop="asthma">
        <el-select
          v-model="form1.asthma"
          filterable
          placeholder="True/False"
        >
      <el-option label="True" value="true"></el-option>
      <el-option label="False" value="false"></el-option>
        </el-select>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('form1')">Create</el-button>
      <el-button @click="resetForm('form1')">Reset</el-button>
  </el-form-item>
  </el-form>
  <el-dialog
  title="How To Help Further. "
  :visible.sync="centerDialogVisible"
  width="30%"
  :fullscreen="true"
  center>
  <span class="word">
      Based on the information you have entered you may be eligible to help save lives through a plasma donation! Would you like to learn more?
</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="leave">Donate Now!</el-button>
    <el-button type="primary" @click="nextpage">Learn More</el-button>
  </span>
</el-dialog>
    </div>
<div v-if="!pageInfo" class="last">
    <h1>WHAT DOES THIS MEAN?</h1>

    <span class="top-span">Because you tested positive for COVID-19 and have recovered, your body has seroconverted, which means that it has produced antibodies that can help fight against the virus.

Your plasma contains those virus fighters! By donating some of your plasma, others can use your antibodies to help their bodies fight the COVID-19 virus and help them to become a COVID-19 survivor, just like you!
</span>
<h1 clas>WHAT IS A PLASMA DONATION?</h1>
    <span style="padding-top: 15px">
A plasma donation is a blood donation in which your blood is drawn from one arm and filtered through a machine that keeps the plasma and returns the rest of your blood (red blood cells, white blood cells and platelets) in a saline solution to you through your other arm. 
</span>
<span>
    For more information visit:<a href="https://ccpp19.org/index.html"> National COVID-19 Convalescent Plasma Project</a href>
    </span>
     <amplify-authenticator class="login" />
</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
data(){
    return {
         centerDialogVisible: false,
        rules1: {
          state: [
            { required: true, message: 'Please input which state you live in', trigger: 'change' },
          ],
          gender: [
            { required: true, message: 'Please select a gendner', trigger: 'change' }
          ],
        pregnant: [
            { required: true, message: 'Please select if you are pregnant or breasfeeding!', trigger: 'change' }
          ],
        age: [
            { required: true, message: 'Please enter your age!', trigger: 'change' }
          ],
        testing: [
            {   required: true, message: 'Please select if you have been tested!', trigger: 'change' }
          ],
        fever: [
            {   required: true, message: 'Please select if you have a high fever!', trigger: 'change' }
          ],
        hospital: [
            {   required: true, message: 'Please select if you have been to the hospital!', trigger: 'change' }
          ],
        ventilator: [
            {   required: true, message: 'Please select if you have a ventilator', trigger: 'change' }
          ],
        stay: [
            {   required: true, message: 'Please select how long you are going to stay', trigger: 'change' }
          ],
        icu: [
            {   required: true, message: 'Please select if you are in the ICUY', trigger: 'change' }
          ],
        heart: [
            {   required: true, message: 'Please answer about your heart', trigger: 'change' }
          ],
        diabetes: [
            {   required: true, message: 'Please answer about diabetes', trigger: 'change' }
          ],
                            asthma: [
            {   required: true, message: 'Please answer about asthma', trigger: 'change' }
          ],
        },
    states: [
    {
        label: "Alabama",
        value: "AL"
    },
    {
        label: "Alaska",
        value: "AK"
    },
    {
        label: "American Samoa",
        value: "AS"
    },
    {
        label: "Arizona",
        value: "AZ"
    },
    {
        label: "Arkansas",
        value: "AR"
    },
    {
        label: "California",
        value: "CA"
    },
    {
        label: "Colorado",
        value: "CO"
    },
    {
        label: "Connecticut",
        value: "CT"
    },
    {
        label: "Delaware",
        value: "DE"
    },
    {
        label: "District Of Columbia",
        value: "DC"
    },
    {
        label: "Federated States Of Micronesia",
        value: "FM"
    },
    {
        label: "Florida",
        value: "FL"
    },
    {
        label: "Georgia",
        value: "GA"
    },
    {
        label: "Guam",
        value: "GU"
    },
    {
        label: "Hawaii",
        value: "HI"
    },
    {
        label: "Idaho",
        value: "ID"
    },
    {
        label: "Illinois",
        value: "IL"
    },
    {
        label: "Indiana",
        value: "IN"
    },
    {
        label: "Iowa",
        value: "IA"
    },
    {
        label: "Kansas",
        value: "KS"
    },
    {
        label: "Kentucky",
        value: "KY"
    },
    {
        label: "Louisiana",
        value: "LA"
    },
    {
        label: "Maine",
        value: "ME"
    },
    {
        label: "Marshall Islands",
        value: "MH"
    },
    {
        label: "Maryland",
        value: "MD"
    },
    {
        label: "Massachusetts",
        value: "MA"
    },
    {
        label: "Michigan",
        value: "MI"
    },
    {
        label: "Minnesota",
        value: "MN"
    },
    {
        label: "Mississippi",
        value: "MS"
    },
    {
        label: "Missouri",
        value: "MO"
    },
    {
        label: "Montana",
        value: "MT"
    },
    {
        label: "Nebraska",
        value: "NE"
    },
    {
        label: "Nevada",
        value: "NV"
    },
    {
        label: "New Hampshire",
        value: "NH"
    },
    {
        label: "New Jersey",
        value: "NJ"
    },
    {
        label: "New Mexico",
        value: "NM"
    },
    {
        label: "New York",
        value: "NY"
    },
    {
        label: "North Carolina",
        value: "NC"
    },
    {
        label: "North Dakota",
        value: "ND"
    },
    {
        label: "Northern Mariana Islands",
        value: "MP"
    },
    {
        label: "Ohio",
        value: "OH"
    },
    {
        label: "Oklahoma",
        value: "OK"
    },
    {
        label: "Oregon",
        value: "OR"
    },
    {
        label: "Palau",
        value: "PW"
    },
    {
        label: "Pennsylvania",
        value: "PA"
    },
    {
        label: "Puerto Rico",
        value: "PR"
    },
    {
        label: "Rhode Island",
        value: "RI"
    },
    {
        label: "South Carolina",
        value: "SC"
    },
    {
        label: "South Dakota",
        value: "SD"
    },
    {
        label: "Tennessee",
        value: "TN"
    },
    {
        label: "Texas",
        value: "TX"
    },
    {
        label: "Utah",
        value: "UT"
    },
    {
        label: "Vermont",
        value: "VT"
    },
    {
        label: "Virgin Islands",
        value: "VI"
    },
    {
        label: "Virginia",
        value: "VA"
    },
    {
        label: "Washington",
        value: "WA"
    },
    {
        label: "West Virginia",
        value: "WV"
    },
    {
        label: "Wisconsin",
        value: "WI"
    },
    {
        label: "Wyoming",
        value: "WY"
    }
],
pageInfo: true,
form1:
{
state: '',
gender: '',
pregnant: null,
age: null,
testing: null,
fever: null,
hospital: null,
stay: null,
ventilator: null,
icu: null,
heart: null,
diabetes: null,
asthma: null,
}
    }
},
methods: {
    leave(){
        window.location.href = 'https://www.redcross.org/local/georgia.html'
    },
    nextpage(){
        this.pageInfo = !this.pageInfo
        this.centerDialogVisible = false
        this.$emit('change')
    },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.form1)
           this.centerDialogVisible = true
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
}
</script>

<style>
.login{
    width: 300px
}
.el-input{
    width: 120px
}
.word{
    word-break: normal;
    font-size: 18pt;
}
.top-span{
    padding-top: 10px;
    margin-bottom: 15px
}
</style>