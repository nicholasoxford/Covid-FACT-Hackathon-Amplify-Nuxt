<template>
<div>
    <div v-if="pageInfo">
  <el-form  :model="form1" :rules="rules1" ref="form1"  class="ruleForm" label-position="top" align="center" >
<el-form-item label="What state do you live in?" prop="state">
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
          <el-form-item label="What is your gender?" prop="gender">
        <el-select
          v-model="form1.gender"
          filterable
          placeholder="Gender"
        >
      <el-option label="Male" value="male"></el-option>
      <el-option label="Female" value="female"></el-option>
          
        </el-select>
  </el-form-item>
            <el-form-item label="Are you pregnant or breastfeeding?" prop="pregnant">
        <el-select
          v-model="form1.pregnant"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
              <el-form-item label="What is your age? " prop="age">
        <el-input v-model="form1.age" size="medium" type="number"> </el-input>
  </el-form-item>
              <el-form-item label="Have you been tested for COVID-19?" prop="testing">
        <el-select
          v-model="form1.testing"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
                <el-form-item label="Do you have a fever above 100°F (37.8°C)?" prop="fever">
        <el-select
          v-model="form1.fever"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
    <el-form-item label="Have you been hospitalized for COVID-19 or COVID-19 symptoms?" prop="hospital">
        <el-select
          v-model="form1.hospital"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
      <el-form-item label="How long have you been in the hospital for COVID-19 (hours)?" prop="stay">
        <el-select
          v-model="form1.stay"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
        <el-form-item label="Have you used or are currently using a ventilator to treat COVID-19 related symptoms?" prop="ventilator">
        <el-select
          v-model="form1.ventilator"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
         <el-form-item label="Have you been admitted to the ICU for a COVID-19 diagnosis or COVID-19-like symptoms? " prop="icu">
        <el-select
          v-model="form1.icu"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
           <el-form-item label="Do you have heart disease?" prop="heart">
        <el-select
          v-model="form1.heart"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
               <el-form-item label=" Do you have asthma?" prop="asthma">
        <el-select
          v-model="form1.asthma"
          filterable
          placeholder="Yes / No"
        >
<el-option
            v-for="item in yes_no"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            style="display:block"
          ></el-option>
        </el-select>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm('form1')">Submit</el-button>
  </el-form-item>
  </el-form>
  <el-dialog
  :visible.sync="centerDialogVisible"
  width="30%"
  :fullscreen="true"
  center>
  <div style="text-align:center">
  <span class="word">
      Based on the information you have entered, you may be eligible to help save lives through a plasma donation. Would you like to learn more?
</span>
</div>
<div style="text-align:center;padding-top:15px">
  <span class="word">
     During a pandemic like COVID-19, clinical responses must be carried out on the time scale of days. The faster that clinical trials find eligible subjects, the faster vaccines and cures can be developed, reducing strain on the health care system and saving lives. In addition, identifying people who may have developed antibodies to SARS-CoV2 has the potential to lead to novel therapeutics. It is critical that the public be connected with relevant clinicians in a rapid and effective way. 

</span>
</div>
<div style="text-align:center">
<span class="team"><a href="https://devpost.com/software/therapeutics-vaccines-and-serum-donation">
     Click here to learn more about the team behind this product!
</a href></span>
</div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="leave">Donate Now</el-button>
    <el-button type="primary" @click="nextpage">Learn More</el-button>
  </span>
</el-dialog>
    </div>
<div v-if="!pageInfo" class="last">
    <div>
    <h1>You</h1>
    </div>
<div  style="padding-top: 10px">
    <span class="top-span">Because you tested positive for COVID-19 and have recovered, your body has seroconverted. This means that it has produced antibodies that can now help fight against the virus. Your plasma contains those virus fighters! By donating some of your plasma, others can use your antibodies to help their bodies fight the COVID-19 virus and help them become a COVID-19 survivor, just like you.
</span>
</div>
<div style="padding-top:5px">
<h1 clas>What is a plasma donation?</h1>
</div>
<div  style="padding-top: 15px">
    <span >
A plasma donation is a blood donation in which your blood is drawn from one arm and filtered through a machine that keeps the plasma and returns the rest of your blood (red blood cells, white blood cells and platelets) in a saline solution to you through your other arm. 
</span>
</div>
<div style="padding-top: 15px">
<h3>
    For more information visit:<a href="https://ccpp19.org/index.html"> National COVID-19 Convalescent Plasma Project</a href>
    </h3>
    </div>
 <div  style="padding-top: 15px">
    <el-button type="primary" ><nuxt-link to="/about">Sign Up</nuxt-link></el-button>
   </div>
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
            {   required: true, message: 'Please select if you are in the ICU', trigger: 'change' }
          ],
        heart: [
            {   required: true, message: 'Please answer about your heart', trigger: 'change' }
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
yes_no: [{
    label: "Yes",
    value: true
},
    {
        label: "No",
        value: false
    }],
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
asthma: null,
}
    }
},
methods: {
    leave(){
        window.location.href = 'https://www.redcross.org/local/georgia.html'
    },
    leave2(){
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
    text-align: center;
    word-break: normal;
    font-size: 16pt;
}
.top-span{
    padding-top: 10px;
    margin-bottom: 15px
}
.team {

}
</style>