import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  drugs = [
    {
      "Name":"Acetaminophen",
      "prop1":"prop1.Value",
      "prop3":"value3"
    },
    {
      "Name":"Adderall",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Alprazolam",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Amitriptyline",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Amlodipine",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Amoxicillin",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Citalopram",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Clindamycin",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Clonazepam",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Codeine",
      "prop2":"value2",
      "prop3":"value3"
    }
  ];
  
  mechanisms = [
    {
      "Name":"Acetam_TEST",
      "prop1":"prop1.Value",
      "prop3":"value3"
    },
    {
      "Name":"Adder_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Alpra_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Amitri_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Amlodip_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Amoxicillin_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Cita_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Clindam_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Clonaze_TEST",
      "prop2":"value2",
      "prop3":"value3"
    },
    {
      "Name":"Codei_TEST",
      "prop2":"value2",
      "prop3":"value3"
    }
  ];

  constructor() {     
  }

  ngOnInit() {    
  }

  filterDrugList(userInput: String){      
  
    var myNode = document.getElementById("DrugSection");      // Removing all the nodes to filter the data
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    var myNode1 = document.getElementById("mechanismsSection");      // Removing all the nodes to filter the data
    while (myNode1.firstChild) {
        myNode1.removeChild(myNode1.lastChild);
    }

    this.finterAndAppendDrugsData(this.drugs,userInput);
    this.finterAndAppendMechanismsData(this.mechanisms,userInput);
  }

  finterAndAppendDrugsData(jString,userInput){    
    for (let jObj of jString) {
      if((jObj.Name.toLocaleLowerCase().startsWith(userInput.toLowerCase()))){        
        var newLi = document.createElement("li");          // Create new element
        var newP = document.createElement("p");        
        var t = document.createTextNode(jObj.Name);
        newP.appendChild(t);
        newLi.appendChild(newP);
        document.getElementById("DrugSection").appendChild(newLi);  // append        
      }
    }    
  }

  finterAndAppendMechanismsData(jString,userInput){    
    for (let jObj of jString) {
      if((jObj.Name.toLocaleLowerCase().startsWith(userInput.toLowerCase()))){        
        var newLi = document.createElement("li");          // Create new element
        var newP = document.createElement("p");        
        var t = document.createTextNode(jObj.Name);
        newP.appendChild(t);
        newLi.appendChild(newP);
        document.getElementById("mechanismsSection").appendChild(newLi);  // append        
      }
    }    
  }
}
